import React from 'react'

function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <footer>
            <style jsx global>
                {`
         footer{
            background: #222;
          color: #fff;
          display: grid;
          place-content: center;
          width:100%;
          padding: 20px;
          font-weight: 500;
          }
          .blogItem img{
            border-radius: 7px;
            box-shadow: 4px 5px 15px #3333;
            margin-top: 20px;
            padding: 
          }
          `
                }
            </style>
            <p> &#169; Coding Hunter {getCurrentYear()}</p>
        </footer>
    )
}

export default Footer;