'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    const professionalsArray = [];

    professionalsArray.push({
      userName: 'encuadrado',
      password: 'enc123**456&789',
      userType: 'professional',
      profession: 'Psicologa',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    professionalsArray.push({
      userName: 'Antonia',
      password: 'antitolinda',
      userType: 'professional',
      profession: 'Doctora',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    professionalsArray.push({
      userName: 'Pamela',
      password: 'pamela1234',
      userType: 'professional',
      profession: 'Psicologa',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return queryInterface.bulkInsert('Professionals', professionalsArray);
    
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

