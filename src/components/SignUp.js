import React from "react";

export default function SignUp() {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Confirm your password" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}