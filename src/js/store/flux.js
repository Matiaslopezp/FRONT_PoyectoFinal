const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favoritos:[],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {

      addFav:(nombre)=>{
				const store=getStore();
				console.log("elementos será agregado a favortios",nombre)
				setStore({favoritos:[...store.favoritos,nombre]})
			},
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      register: (mail,password,fullname,address1,address2,city,state,npostal) => {
			let respuesta2 = false;
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			var raw = JSON.stringify({
			email: mail,
			password: password,
			fullname: fullname,
			address1: address1,
			address2: address2,
			city: city,
			state: state,
			npostal: npostal,
			});

			var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
			};

			fetch(
			"https://3000-4geeksacade-flaskresthe-czhk1bs7kpb.ws-us84.gitpod.io/register",
			requestOptions
			)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				respuesta2 = true;
			})
			.catch((error) => console.log("error", error));

		return respuesta2;
      	},

      login: (mail, pass) => {
        let respuesta = false;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: mail,
          password: pass,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3000-4geeksacade-flaskresthe-czhk1bs7kpb.ws-us84.gitpod.io/login",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            respuesta = true;
          })
          .catch((error) => console.log("error", error));

        return respuesta;
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
