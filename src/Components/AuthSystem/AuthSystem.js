import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import Swal from "sweetalert2";
import { useState } from "react";

const AuthSystem = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const errorFun = (e) => {
    return <p>{error}</p>;
  };

  const auth = getAuth(app);
  const googleAuth = new GoogleAuthProvider();
  const gitAuth = new GithubAuthProvider();
  //-------Sign up or Register-------/

  const handelName = (e) => {
    setName(e.target.value);
  };

  const UpdatName = (e) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const handleEmail = (e) => {
    if (!/^\S+@\S+\.\S+$/.test(e.target.value)) {
      setError("Please input valid email");
      return;
    }
    setError("");
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    if (!/(?=.{8,})/.test(e.target.value)) {
      setError("Please provide 8 digit password");
      return;
    } else if (!/(?=.*[a-zA-Z])/.test(e.target.value)) {
      setError("Provide at list one letter");
      return;
    }
    setError("");
    setPassword(e.target.value);
  };

  const signBtn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        UpdatName();
        console.log(user);
        Swal.fire(
          "Email Register Successfully!",
          "You clicked the button!",
          "success"
        );
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const github = (e) => {
    signInWithPopup(auth, gitAuth)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        Swal.fire(
          "Google Login Successfully",
          "Explore our services",
          "question"
        );
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const google = (e) => {
    e.preventDefault();

    signInWithPopup(auth, googleAuth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        Swal.fire(
          "Google Login Successfully",
          "Explore our services",
          "question"
        );

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  //----------Sign in or Login----------/
  const loginBtn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Swal.fire("Login Successfully Done !", "Explore our site", "success");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return {
    google,
    handleEmail,
    handelPassword,
    signBtn,
    github,
    loginBtn,
    errorFun,
    handelName,
  };
};

export default AuthSystem;
