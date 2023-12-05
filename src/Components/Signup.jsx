import { useState } from 'react';
import { Input, Button, Card, Link } from '@nextui-org/react';
import { createUser } from '../lib/dbClient';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../context/AuthContext';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setToken } = useAuthContext();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userToken = await createUser({ userName, email, password });
      localStorage.setItem("token", userToken);
      setToken(userToken)
      navigate('/');
    } catch (error) {
      console.error('SignUp Error:', error);
    }
  };
  const handleNavigate = () => {
    navigate('/login');
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <Card shadow style={{ width: '400px', height: '500px', padding: '20px' }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <Input
            type="text"
            label="Username"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className='my-8'
          />
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='my-8'
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='my-8'
          />
          <p className='text-right text-sm my-4'>Already have an account? <Link onClick={handleNavigate} className='text-sm cursor-pointer'> Login here</Link></p>
          <Button color="danger" className='my-4 px-8' type="submit" block>
            Sign Up
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
