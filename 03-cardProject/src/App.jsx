import React from 'react'
import Card from './components/Card'

const App = () => {

  const arr = [
    {
      logo: "https://imgs.search.brave.com/R2sy_8tEyN3xPSljdMF5DQbFsamUITQiFoSp9E2WKZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/ODE2LzgwOS9zbWFs/bC9hbWF6b24tdHJh/bnNwYXJlbnQtaWNv/bi1mcmVlLXBuZy5w/bmc",
      company: 'Amazon',
      time: 5,
      role: 'Senior UI/UX Designer',
      tag1: 'Part-Time',
      tag2: 'Senior Level',
      income: 120,
      location: 'Mumbai India'
    },
    {
      logo: "https://imgs.search.brave.com/PdE0_txzUdHcbHT5AhV0yUQJQp1HsegZYHyXHuGZ3vs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL0dvb2dsZV8l/MjJHJTIyX2xvZ28u/c3Zn", // Google
      company: "Google",
      time: "2",
      role: "Frontend Engineer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      income: "150",
      location: "Bangalore, India"
    },
    {
      logo: "https://imgs.search.brave.com/DcDeI-6I1YQiFKaHHKKWqpXRKNM_RtZL20vldAoecNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZmL2Ri/LzIwL2ZmZGIyMDcz/MDkxNWEyOTIyNDRj/MGFmOGVmYjIyY2Zl/LmpwZw", // Microsoft
      company: "Microsoft",
      time: "7",
      role: "Product Designer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      income: "140",
      location: "Hyderabad, India"
    },
    {
      logo: "https://imgs.search.brave.com/Yrs6Q69FUnREP0h0LBGNswFVSQ4mOV1vOEZbJlkBnQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/NjU4LzMzNi9zbWFs/bC9uZXRmbGl4LWxv/Z28tZnJlZS1kb3du/bG9hZC1uZXRmbGl4/LWxvZ28tZnJlZS1w/bmcucG5n", // Netflix
      company: "Netflix",
      time: "1",
      role: "UI Designer",
      tag1: "Contract",
      tag2: "Mid Level",
      income: "160",
      location: "Remote"
    },
    {
      logo: "https://imgs.search.brave.com/DIks2Pgq-EmeOn_ma2tywF2ZhCMOflxT7OP4LJrIIco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzEwL2FpcmJuYi1s/b2dvLTAucG5n", // Airbnb
      company: "Airbnb",
      time: "3",
      role: "UX Researcher",
      tag1: "Full-Time",
      tag2: "Senior Level",
      income: "155",
      location: "Remote"
    },
    {
      logo: "https://imgs.search.brave.com/T9WyLiQxynyDNz3VAsy2Jzfv-93JBJeSQK6TqJ8l5uU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMjU4NS8yNTg1/MTYxLnBuZw", // Spotify
      company: "Spotify",
      time: "4",
      role: "Product UI Designer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      income: "130",
      location: "Gurgaon, India"
    },
    {
      logo: "https://imgs.search.brave.com/fD-1nGYEjs24DVYVcKMdjFhwqhcGKl-HGA77VqFNLJw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMxLzIvZmxpcGth/cnQtbG9nby1wbmdf/c2Vla2xvZ28tMzE4/NDA2LnBuZw", // Flipkart (placeholder style)
      company: "Flipkart",
      time: "6",
      role: "Visual Designer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      income: "90",
      location: "Bangalore, India"
    },
    {
      logo: "https://imgs.search.brave.com/7isIRe16tPthrBM_694r0eyIvctb9joCnQgRmVLA_zc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzEvem9oby1s/b2dvLXBuZ19zZWVr/bG9nby0yNzQxMTIu/cG5n", // Zoho (SVG hosted)
      company: "Zoho",
      time: "8",
      role: "UI Engineer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      income: "85",
      location: "Chennai, India"
    },
    {
      logo: "https://imgs.search.brave.com/RuqGqICOUNfVopTXwwJ_N2rARCFY67DkXT7u2eLY_LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc", // Adobe
      company: "Adobe",
      time: "2",
      role: "Experience Designer",
      tag1: "Part-Time",
      tag2: "Senior Level",
      income: "145",
      location: "Noida, India"
    },
    {
      logo: "https://imgs.search.brave.com/PvITyPz6FxejokbZdwPBeuq5f2xiqP_6MH_iniRCGnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdiLzgw/L2IzLzdiODBiMzI3/Njg2NmYyMjU4YjU3/MGFhNmMwN2U1NGNh/LmpwZw", // Tesla
      company: "Tesla",
      time: "1",
      role: "UI Systems Designer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      income: "170",
      location: "Remote"
    }
  ]


  return (
    <div style={{ backgroundColor: '#111' }} className='parent'>
      {arr.map(function (c, idx) {
        // console.log(c);
        // return <h1>{c}</h1>  Can't print object as a child
        return <div key={idx}>
          <Card lg={c.logo} cmp={c.company} tm={c.time} rl={c.role} tg1={c.tag1} tg2={c.tag2} inc={c.income} loc={c.location} Key={idx} />
        </div>
      })}

    </div>
  )
}

export default App
