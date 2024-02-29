function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

async function processFamilyArray(familyArray) {
  try {
    await waitOneSecond();
    for (const family of familyArray) {
      if (family.fatherName.toLowerCase() === 'yves') {
        throw new Error('Yves is not an allowed dad in 2022');
      }
      family.totalNumberOfFamilyMembers = Object.keys(family).length;
    }
    console.log(familyArray);
  } catch (error) {
    console.error(error);
  }
}

const families = [
  {
    fatherName: 'John',
    motherName: 'Jane',
    childrenNumber: 2,
  },
  {
    fatherName: 'Yves',
    motherName: 'Emily',
    childrenNumber: 1,
  },
  {
    fatherName: 'Michael',
    motherName: 'Sarah',
    childrenNumber: 3,
  },
];

processFamilyArray(families);
