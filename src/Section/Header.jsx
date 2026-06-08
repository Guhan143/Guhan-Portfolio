import LeftContent from "../Components/LeftContent";
import RightContent from "../Components/RightContent";

const Header = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-16"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
        >
          {/* Mobile First → Image */}
          <div className="order-1 lg:order-2">
            <RightContent />
          </div>

          {/* Mobile Second → Content */}
          <div className="order-2 lg:order-1">
            <LeftContent />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Header;