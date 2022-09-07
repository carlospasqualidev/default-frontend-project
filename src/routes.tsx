import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
// COMPONENTS
import { AuthProvider } from './contexts/Auth/AuthProvider';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Sidebar } from './components/Sidebar';

// AUTHENTICATION
import { Login } from './screens/Authentication/Login';

// COMPANIES
import { CompaniesList } from './screens/Companies/List';
import { CompanyDetails } from './screens/Companies/Details';

const AppRoutes = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Login />} />

        <Route
          path="/"
          element={
            <Sidebar>
              <RequireAuth />
            </Sidebar>
          }
        >
          <Route path="/companies" element={<Outlet />}>
            <Route index element={<CompaniesList />} />
            <Route path=":user_id" element={<CompanyDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default AppRoutes;
