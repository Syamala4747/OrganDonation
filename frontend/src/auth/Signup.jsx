import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const roleOptions = [
  { value: 'donor', label: 'Donor', icon: '👤' },
  { value: 'hospital', label: 'Hospital', icon: '📋' },
  { value: 'admin', label: 'Admin', icon: '🛡️' },
  { value: 'organization', label: 'Organization', icon: '🏢' },
];

const Signup = () => {
  const [tab, setTab] = useState('register');
  const [form, setForm] = useState({ username: '', email: '', password: '', category: 'donor' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div style={{display:'flex', minHeight:'100vh', background:'#f6fcfd', boxSizing:'border-box', padding:'0'}}>
      {/* Left Side: Register Form */}
      <div style={{flex:'1', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', background:'#f6fcfd', padding:'3rem 0'}}>
        <div style={{width:'100%', maxWidth:'420px', marginBottom:'2rem'}}>
          <div style={{display:'flex', alignItems:'center', gap:'0.7rem', marginBottom:'0.5rem'}}>
            <span style={{color:'#ef4444', fontSize:'1.7rem', fontWeight:'bold'}}>❤</span>
            <span style={{fontWeight:'bold', fontSize:'1.15rem', color:'#0f172a'}}>LifeShare</span>
          </div>
          <div style={{fontSize:'1.15rem', color:'#334155', marginBottom:'1.5rem'}}>Join our life-saving community</div>
          <div style={{display:'flex', background:'#f3f4f6', borderRadius:'2rem', overflow:'hidden', marginBottom:'1.5rem', width:'100%'}}>
            <button style={{flex:1, padding:'0.7rem 0', fontWeight:'bold', fontSize:'1.1rem', background:tab==='login'?'#fff':'#f3f4f6', border:'none', outline:'none', cursor:'pointer', color:'#222'}} onClick={()=>{setTab('login');navigate('/login');}}>Login</button>
            <button style={{flex:1, padding:'0.7rem 0', fontWeight:'bold', fontSize:'1.1rem', background:tab==='register'?'#fff':'#f3f4f6', border:'none', outline:'none', cursor:'pointer', color:'#222'}} onClick={()=>setTab('register')}>Register</button>
          </div>
          {tab==='register' && (
            <div style={{background:'#fff', borderRadius:'1.5rem', boxShadow:'0 2px 16px rgba(0,0,0,0.07)', padding:'2.2rem 2rem', width:'100%', margin:'0 auto'}}>
              <h2 style={{fontWeight:'bold', fontSize:'2rem', marginBottom:'0.5rem', color:'#222'}}>Create Account</h2>
              <div style={{color:'#555', fontSize:'1.1rem', marginBottom:'1.5rem'}}>Join our life-saving community</div>
              <form onSubmit={e => {e.preventDefault(); navigate('/donor');}}>
                <label style={{fontWeight:'500', fontSize:'1.05rem', marginBottom:'0.3rem', display:'block'}}>Username</label>
                <input type="text" name="username" placeholder="Enter your username" value={form.username} onChange={handleChange} required style={{width:'100%', padding:'0.9rem 1rem', borderRadius:'2rem', border:'none', background:'#f3f4f6', fontSize:'1.1rem', marginBottom:'1.2rem'}} />
                <label style={{fontWeight:'500', fontSize:'1.05rem', marginBottom:'0.3rem', display:'block'}}>Category</label>
                <select name="category" value={form.category} onChange={handleChange} style={{width:'100%', padding:'0.9rem 1rem', borderRadius:'2rem', border:'none', background:'#f3f4f6', fontSize:'1.1rem', marginBottom:'1.2rem'}}>
                  <option value="donor">Donor</option>
                  <option value="hospital">Hospital</option>
                  <option value="admin">Admin</option>
                  <option value="organization">Organization</option>
                </select>
                <label style={{fontWeight:'500', fontSize:'1.05rem', marginBottom:'0.3rem', display:'block'}}>Email</label>
                <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required style={{width:'100%', padding:'0.9rem 1rem', borderRadius:'2rem', border:'none', background:'#f3f4f6', fontSize:'1.1rem', marginBottom:'1.2rem'}} />
                <label style={{fontWeight:'500', fontSize:'1.05rem', marginBottom:'0.3rem', display:'block'}}>Password</label>
                <input type="password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange} required style={{width:'100%', padding:'0.9rem 1rem', borderRadius:'2rem', border:'none', background:'#f3f4f6', fontSize:'1.1rem', marginBottom:'1.7rem'}} />
                <button type="submit" style={{width:'100%', background:'#22a6f5', color:'#fff', fontWeight:'bold', fontSize:'1.2rem', border:'none', borderRadius:'2rem', padding:'1rem 0', cursor:'pointer'}}>Create Account</button>
              </form>
            </div>
          )}
        </div>
      </div>
      {/* Right Side: Info & Cards */}
      <div style={{flex:'1', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', background:'linear-gradient(135deg,#f6fcfd 60%,#eaf6ff 100%)', padding:'3rem 0'}}>
        <div style={{width:'100%', maxWidth:'520px', margin:'0 auto'}}>
          <div style={{fontSize:'1.15rem', color:'#222', marginBottom:'0.5rem', textAlign:'center'}}>Medical professionals</div>
          <h1 style={{fontWeight:'bold', fontSize:'2.3rem', color:'#222', textAlign:'center', marginBottom:'1rem'}}>Make a Difference Today</h1>
          <div style={{color:'#555', fontSize:'1.15rem', marginBottom:'2.2rem', textAlign:'center'}}>Your donation can save lives and bring hope to families in need. Join thousands of heroes making a real impact.</div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', justifyContent:'center'}}>
            <div style={{background:'#fff', borderRadius:'1.2rem', boxShadow:'0 2px 12px rgba(34,197,94,0.08)', padding:'1.5rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{marginBottom:'0.5rem'}}><circle cx="12" cy="8" r="4" stroke="#22c55e" strokeWidth="2"/><path d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#22c55e" strokeWidth="2"/></svg>
              <div style={{fontWeight:'bold', fontSize:'1.15rem', color:'#222'}}>Donor</div>
              <div style={{color:'#555', fontSize:'1rem'}}>Register to donate blood or organs</div>
            </div>
            <div style={{background:'#fff', borderRadius:'1.2rem', boxShadow:'0 2px 12px rgba(37,99,235,0.08)', padding:'1.5rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{marginBottom:'0.5rem'}}><rect x="5" y="7" width="14" height="10" rx="2" stroke="#2563eb" strokeWidth="2"/><path d="M9 11h6" stroke="#2563eb" strokeWidth="2"/></svg>
              <div style={{fontWeight:'bold', fontSize:'1.15rem', color:'#222'}}>Hospital</div>
              <div style={{color:'#555', fontSize:'1rem'}}>Search and request donations</div>
            </div>
            <div style={{background:'#fff', borderRadius:'1.2rem', boxShadow:'0 2px 12px rgba(100,116,139,0.08)', padding:'1.5rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{marginBottom:'0.5rem'}}><rect x="7" y="7" width="10" height="10" rx="2" stroke="#64748b" strokeWidth="2"/><path d="M12 11v2" stroke="#64748b" strokeWidth="2"/></svg>
              <div style={{fontWeight:'bold', fontSize:'1.15rem', color:'#222'}}>Admin</div>
              <div style={{color:'#555', fontSize:'1rem'}}>Manage system and approvals</div>
            </div>
            <div style={{background:'#fff', borderRadius:'1.2rem', boxShadow:'0 2px 12px rgba(245,158,66,0.08)', padding:'1.5rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{marginBottom:'0.5rem'}}><rect x="4" y="8" width="16" height="8" rx="2" stroke="#f59e42" strokeWidth="2"/><path d="M8 12h8" stroke="#f59e42" strokeWidth="2"/></svg>
              <div style={{fontWeight:'bold', fontSize:'1.15rem', color:'#222'}}>Organization</div>
              <div style={{color:'#555', fontSize:'1rem'}}>Coordinate post-death donations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
