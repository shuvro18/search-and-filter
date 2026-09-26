

const loading = () => {
   return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        
       
        <p className="text-gray-600 font-medium text-lg tracking-wide">
          Loading products, please wait...
        </p>
      </div>
    </div>
  );
};

export default loading;