import '../styles/styles.scss'

function HomePage(){
    return (
        <section className='page'>
            <Landing />
        </section>
    );
}

function Login(){

    // // var userEmail = document.getElementById("email_field").value;
    // // var userPass = document.getElementById("password_field").value;
  
    // firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
  
    //   window.alert("Error : " + errorMessage);
  
    //   // ...
    // });

    return (

        <button>Sign in with Google.</button>
    );
  
  }

function Landing(){
    return (
        <section>
            <Login />
        </section>
    );
}



export default HomePage;