#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

const WEBHOOK_URL =
  process.env.DISCORD_WEBHOOK ||
  process.env.DISCORD_WEBHOOK_URL;

async function sendDiscord(payload) {
  if (!WEBHOOK_URL) {
    console.log('Notice: DISCORD_WEBHOOK is not set in environment. Skipping notification.');
    process.exit(0);
  }

  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`Discord API responded with status ${res.status}: ${text}`);
    process.exit(1);
  }

  console.log('Successfully sent notification to Discord.');
}

async function main() {
  const eventName = process.env.GITHUB_EVENT_NAME || 'push';
  const eventPath = process.env.GITHUB_EVENT_PATH;

  let eventData = {};
  if (eventPath && fs.existsSync(eventPath)) {
    try {
      eventData = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
    } catch (err) {
      console.warn('Could not parse GITHUB_EVENT_PATH:', err);
    }
  }

  if (eventName === 'push') {
    const repo = eventData.repository?.full_name || process.env.GITHUB_REPOSITORY || 'ShaikhZaid404/wolfmc-web';
    const repoUrl = eventData.repository?.html_url || `https://github.com/${repo}`;
    let branch = process.env.GITHUB_REF_NAME || (eventData.ref ? eventData.ref.replace('refs/heads/', '') : '');
    let pusher = eventData.pusher?.name || eventData.sender?.login || '';
    const commits = eventData.commits || [];
    const headCommit = eventData.head_commit;

    let commitListText = '';

    if (commits.length > 0) {
      commitListText = commits
        .slice(-5)
        .map(c => `[${c.id.slice(0, 7)}](${c.url}) - ${c.message.split('\n')[0]} (${c.author?.name || c.author?.username || 'Unknown'})`)
        .join('\n');
      if (commits.length > 5) {
        commitListText += `\n... and ${commits.length - 5} more commit(s)`;
      }
    } else if (headCommit) {
      commitListText = `[${headCommit.id.slice(0, 7)}](${headCommit.url}) - ${headCommit.message.split('\n')[0]}`;
    } else {
      // Local fallback using Git CLI if run locally
      try {
        const hash = execSync('git rev-parse --short HEAD').toString().trim();
        const fullHash = execSync('git rev-parse HEAD').toString().trim();
        const author = execSync('git log -1 --format="%an"').toString().trim();
        const message = execSync('git log -1 --format="%s"').toString().trim();
        if (!branch) {
          branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
        }
        if (!pusher) {
          pusher = author;
        }
        commitListText = `[${hash}](https://github.com/${repo}/commit/${fullHash}) - ${message} (${author})`;
      } catch (e) {
        commitListText = 'Manual commit update or direct push trigger.';
      }
    }

    if (!branch) branch = 'main';
    if (!pusher) pusher = 'Zaid';

    const payload = {
      username: 'WolfMC Git Watchdog',
      embeds: [
        {
          title: `[GIT PUSH] ${commits.length || 1} Commit(s) to ${branch}`,
          url: eventData.compare || repoUrl,
          description: commitListText,
          color: 0x9333EA, // WolfMC Purple
          fields: [
            {
              name: 'Repository',
              value: `[${repo}](${repoUrl})`,
              inline: true,
            },
            {
              name: 'Branch',
              value: `\`${branch}\``,
              inline: true,
            },
            {
              name: 'Author / Pusher',
              value: pusher,
              inline: true,
            },
          ],
          footer: {
            text: 'WolfMC Autonomous DevOps Engine',
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    await sendDiscord(payload);
  } else if (eventName === 'deployment_status') {
    const status = eventData.deployment_status || {};
    const deployment = eventData.deployment || {};
    const state = status.state || 'unknown';
    const envName = deployment.environment || 'Production';
    const targetUrl = status.target_url || '';
    const sha = (deployment.sha || '').slice(0, 7);
    const ref = deployment.ref || 'main';

    let color = 0x9333EA;
    let title = `[VERCEL DEPLOYMENT] ${state.toUpperCase()}`;

    if (state === 'success') {
      color = 0x10B981; // Green
      title = `[VERCEL DEPLOYMENT] SUCCESS (${envName})`;
    } else if (state === 'failure' || state === 'error') {
      color = 0xEF4444; // Red
      title = `[VERCEL DEPLOYMENT] FAILED (${envName})`;
    } else if (state === 'in_progress' || state === 'pending') {
      color = 0xF59E0B; // Amber
      title = `[VERCEL DEPLOYMENT] IN PROGRESS (${envName})`;
    }

    const fields = [
      {
        name: 'Environment',
        value: envName,
        inline: true,
      },
      {
        name: 'Branch / Ref',
        value: `\`${ref}\`${sha ? ` (${sha})` : ''}`,
        inline: true,
      },
    ];

    if (targetUrl) {
      fields.push({
        name: 'Deployment URL',
        value: `[Visit Deployment](${targetUrl})`,
        inline: false,
      });
    }

    if (status.description) {
      fields.push({
        name: 'Details',
        value: status.description,
        inline: false,
      });
    }

    const payload = {
      username: 'WolfMC Vercel Watchdog',
      embeds: [
        {
          title,
          description: `Vercel reported deployment status: **${state.toUpperCase()}** for **${ref}**.`,
          color,
          fields,
          footer: {
            text: 'WolfMC Autonomous DevOps Engine',
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    await sendDiscord(payload);
  } else {
    console.log(`Event ${eventName} ignored.`);
  }
}

main().catch(err => {
  console.error('Fatal error in discord-notify script:', err);
  process.exit(1);
});
