import React from "react";
import './AboutUs.css'

function AboutUs() {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>

      <nav>
        {/* Add your navigation menu here */}
      </nav>

      <main>
        <section>
          <h2>Our Company</h2>
          <p className="blurb1">
          Coffee Hub is an exciting online community created exclusively for coffee enthusiasts. It serves as a virtual gathering place where coffee lovers from around the world can come together to connect, engage, and share their passion for coffee. Whether you're a connoisseur, a casual coffee drinker, or simply someone curious about the world of coffee, Coffee Hub offers a space where you can explore, interact, and discover everything about the wonderful world of coffee.

Join the Coffee Conversation:
At Coffee Hub, you'll find a dynamic forum where you can indulge in discussions about all things coffee. From brewing methods and equipment recommendations to coffee bean origins, flavors, and recipes, our forum is the perfect platform to connect with like-minded individuals and exchange knowledge. Share your experiences, ask questions, and join engaging conversations with fellow coffee lovers who are equally passionate about this remarkable beverage.
          </p>
        </section>

        <section>
          <h2>Our Team</h2>
          <ul className='listomega'>
            <li>Abel Elias - CEO</li>
            <li>Nate Bazemore - CEO</li>
            <li>Leo Pivato - CEO</li>
          </ul>
          <div className="imgomega">
          <img src='https://gds.myschoolapp.com/ftpimages/416/user/large_user_6416465_373.jpg?resize=200,200'></img>
          <img src='https://gds.myschoolapp.com/ftpimages/416/user/large_user_5902396_6.jpg?resize=200,200'></img>
          <img src='https://gds.myschoolapp.com/ftpimages/416/user/large_user_2696356_873.jpg?resize=200,200'></img>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Coffee Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
