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
      register: async (form) => {
        let respuesta2 = false;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
          
        var raw = JSON.stringify({
          email: form.mail,
          password: form.password,
          fullname: form.fullname,
          address1: form.address1,
          address2: form.address2,
          city: form.city,
          state: form.state,
          npostal: form.npostal,
        });
        
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        
        const response = await  fetch(
          "https://3000-4geeksacade-flaskresthe-czhk1bs7kpb.ws-us85.gitpod.io/register",
          requestOptions
        )
        const data = await response.json();
        
        if(!response.ok) {
          const error = (data && data.message) || response.statusText;
          console.log("error", error)
        } 
        else {
          respuesta2 = true;
        }
        
        return respuesta2;
      },

      login: async (mail, pass) => {
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

        const response = await  fetch(
          "https://3000-4geeksacade-flaskresthe-czhk1bs7kpb.ws-us85.gitpod.io/login",
          requestOptions
        )
        const data = await response.json();
        
        if(!response.ok) {
          const error = (data && data.message) || response.statusText;
          console.log("error", error)
        } 
        else {
          respuesta = true;
        }
        
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
