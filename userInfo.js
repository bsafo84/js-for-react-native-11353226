function createUserProfiles(names, modifiedNames) {
    if (names.length!== modifiedNames.length) {
      throw new Error('The arrays must have the same length');
    }
  
 
    let id = 1;
    
    return names.map(function (name, index) {
      return {
        originalName: name,
        modifiedName: modifiedNames[index],
        id: id++
      };
    });
  }
  

  const names = ['Alice', 'Bob', 'Charlie'];
  const modifiedNames = ['ALICE', 'BOB', 'CHARLIE'];
  const userProfiles = createUserProfiles(names, modifiedNames);
  console.log(userProfiles);
  