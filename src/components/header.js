const Header = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-16 h-16 overflow-hidden rounded-full mr-4">
            <img
              src="https://media.embassynetwork.com/public/events/ed864734-9bae-4bfa-b296-b85af28bb4ea.jpg"
              className="w-full h-full object-cover"
              alt="logo"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Meme Generator</h1>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold">React Course - Project 3</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
