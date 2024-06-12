const db = require('./backend/utilities/db.js');

//test pour verifier le fonctionnent de ma base de donné
(async () => {
  await db.boot();

  console.log('Database booted and initialized.');

  await db.newGroup({ name: 'testGroup', containers: ['container1', 'container2'] });

  const groups = await db.getGroups();
  console.log('All groups:', groups);

  const group = await db.getGroupById(1);
  console.log('Group with ID 1:', group);

  await db.deleteGroup(1);
  console.log('Deleted group with ID 1');

  const updatedGroups = await db.getGroups();
  console.log('All groups after deletion:', updatedGroups);
})();
