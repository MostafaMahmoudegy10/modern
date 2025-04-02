import { useState } from 'react';
import Header from './Header';
import Core from './Core';
import { TEAM } from '../data.js';
import Content from './Content.jsx';

const About = () => {
  const [content, setContent] = useState(null);
  const [show, setShow] = useState(false);

  function selectHandler(name) {
    const member = TEAM.find((item) => item.name === name);
    if (member) {
      setShow(true);
      setContent(member);
    }
  }
  function selectShow(){
    setShow(!show);
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto p-6 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TEAM.map((member, index) => (
            <Core key={index} member={member} selectHandler={selectHandler} />
          ))}
        </div>

        {show && content && <Content content={content} show={selectShow} />}
      </div>
    </div>
  );
};

export default About;