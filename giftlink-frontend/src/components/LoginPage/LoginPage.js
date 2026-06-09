import React, { useState, useEffect } from 'react';

import './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => { e.preventDefault(); }

    return (
        <div classname="container mt-5">
            <div classname="row justify-content-center">
                <div classname="col-md-6 col-lg-4">
                    <div classname="login-card p-4 border rounded">
                        <h2 classname="text-center mb-4 font-weight-bold" id="heading-14">Login</h2>
                        <div classname="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                type="text"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div classname="mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/* Include appropriate error message if login is incorrect*/}
                        <button classname="btn btn-primary w-100 mb-3" onclick="{handleLogin}">Login</button>
                        <p classname="mt-4 text-center">
                            New here? <a href="/app/register" classname="text-primary">Register Here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;
