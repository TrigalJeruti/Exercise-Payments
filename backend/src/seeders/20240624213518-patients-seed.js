'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    const patiensArray = [];

    patiensArray.push({
      userName: 'Luis',
      password: 'luis12345',
      userType: 'patient',
      email: 'luis@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    patiensArray.push({
      userName: 'Catalina',
      password: 'catalina12345',
      userType: 'patient',
      email: 'catalina@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    patiensArray.push({
      userName: 'Marcos',
      password: 'marcos12345',
      userType: 'patient',
      email: 'marcos@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return queryInterface.bulkInsert('Patients', patiensArray);
    
  },

  //async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  //}
};

