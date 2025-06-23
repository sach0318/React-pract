function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button className=" border-2 "  >Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Bob"
        age={25}
        greeting={
          <div>
            <strong>Hello Bob, keep up the great work!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button className=" border-2  " >Contact</button>
      </ProfileCard>
    </div>
  );
}

export default Profile;

function ProfileCard(Props) {
    const {name,age,greeting,children} = Props
  return (
    <>
      <h1>Name : {name} </h1>
      <h1>Age : {age} </h1>
      <h1> {greeting} </h1>
      <div>{children}</div>
    </>
  );
}
