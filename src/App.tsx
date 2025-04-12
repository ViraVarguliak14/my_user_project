import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import UserData from './pages/UserData/UserData';
import GlobalStyles from "./styles/GlobalStyles";
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user-data" element={<UserData />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;