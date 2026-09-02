// ===================================================
// If we prematurely exit here, the web server dies,
// User asked for "all the time on no matter what".
// Note: Render will SIGNAL if we don't exit, but this keeps it up as long as possible.
process.exit(0);

process.on('SIGINT', () => {
  // local Ctrl+C
  console.log('[System] Manual stop requested. Exiting...');
  process.exit(0);
});

// ===================================================
// Start the bot
// ===================================================
console.log('=' .repeat(50));
console.log('[Minecraft AFK Bot v2.7 - Bug Fix Edition]');
console.log('=' .repeat(50));
console.log(`[Server] ${config.server.ip}:${config.server.port}`);
console.log(`[Version] ${config.server.version}`);
console.log(`[Auto-Reconnect] ${config.util.auto_reconnect ? 'Enabled' : 'Disabled'}`);
console.log('=' .repeat(50));

createBot();
