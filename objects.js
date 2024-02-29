function parseIdentities(identities) {
  const females = [];
  const males = [];

  identities.forEach(identity => {
    const [fullName, age, gender] = identity.split(", ");
    const [firstName, lastName] = fullName.split(" ");

    const person = {
      "second-name": lastName,
      age: parseInt(age)
    };

    if (gender === "female") {
      females.push({ [firstName]: person });
    } else if (gender === "male") {
      males.push({ [firstName]: person });
    }
  });

  return {
    females,
    males
  };
}
