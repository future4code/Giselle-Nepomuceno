  export const goToHomePage = (history) => {
    history.push("/");
  };
    
  export const goToListTripPage = (history) => {
    history.push("/viagens");
  };

  export const goToFormPageApp = (history) => {
    history.push("/viagens/inscrever");
  };

  export const goToLoginPage = (history) => {
    history.push("/login");
  };

  export const goToAdminHomePage = (history) => {
    history.push("/admin");
  };
  
  export const goToTripDetailsPage = (history) => {
    history.push("/admin/:id");
  };
  
  export const goToCreateTripPage = (history) => {
    history.push("/admin/criarviagem");
  };
  

