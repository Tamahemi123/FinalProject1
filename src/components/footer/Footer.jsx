
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>আমাদের সম্পর্কে</h4>
            
          </div>
          <div className="col-md-4">
            <h4>সেবা</h4>
            <ul>
              <li>পণ্য সমূহ</li>
              <li>সংশ্লিষ্ট লিংক</li>
              <li>যোগাযোগ</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>যোগাযোগ</h4>
            <p>আপনি যদি আরও তথ্য প্রয়োজন হয়, তাহলে আমাদের সাথে যোগাযোগ করুন।</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
