import './TodoApp.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ListTodosComponent from './ListTodosComponent';
import LogoutComponent from './LogoutComponent';
import ErrorComponent from './ErrorComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import TodoComponent from './TodoComponent';
import AuthProvider, { useAuthContext } from './security/AuthContext';

export default function TodoApp() {

    function AuthenticatedRoute({ children }) {
        const authContext = useAuthContext();
        if (authContext.isAuthenticated)
            return children 

        return <Navigate to='/' />
    }

    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>                        
                        } />
                        <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoComponent />
                            </AuthenticatedRoute>                        
                        } />
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>                        
                        } />
                        <Route path='*' element={<ErrorComponent />} />
                    </Routes>
                    {/* <FooterComponent /> */}
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}