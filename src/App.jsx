
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes/routes';
import Error_404 from './views/pages/errors/Error_404';
import { LoadingProvider } from './context/LoadingContext';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ModalService } from './context/ModalService';
import SureModal from './views/miscellaneous/SureModal';
import { useAuth } from './context/AuthContext';
import LoadingSpinner from './views/miscellaneous/LoadingSpinner';
import Header from './views/layouts/components/Header';


function App() {

  const { loading } = useAuth();

  return (
    <LoadingProvider>
      <ModalService>
        
          <BrowserRouter>
            <ToastContainer />
            
            {loading ? (
              <LoadingSpinner />
            ) : (
              // <FadeTransition>
                <Routes>
                  
                  {/* All Routes */}
                  {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                  ))}

                  {/* Error 404 */}
                  <Route path="*" element={
                    <>
                    {/* <Header userData={userData} isLoggedIn={isLoggedIn} config={config} /> */}
                    <Error_404 />
                    </>
                  } />

                </Routes>
              // </FadeTransition>
            )}

            <SureModal /> 

          </BrowserRouter>
    
      </ModalService>

    </LoadingProvider>
  )
}

export default App
