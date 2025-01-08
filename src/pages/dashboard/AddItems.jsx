
const AddItems = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target

        const name = form.name.value
        // const category = form.category.value
        const price = form.price.value
        const recipeDetails = form.recipeDetails.value

        console.log({name, price, recipeDetails})
    }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">UPDATE ITEM</h2>
        <form onClick={handleSubmit}>
          {/* Recipe Name */}
          <div className="mb-4">
            <label
              htmlFor="recipeName"
              className="block text-sm font-medium text-gray-700"
            >
              Recipe name<span className="">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="recipeName"
              placeholder="Recipe name"
              className="mt-1 block py-3 px-2 w-full text-white border-gray-300 rounded-xl shadow-sm focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category<span className="">*</span>
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 py-3 px-2 text-white block w-full border-gray-300 rounded-xl shadow-sm focus:ring-gray-500 focus:border-gray-500"
            >
              <option value="">Category</option>
              <option value="appetizer">Appetizer</option>
              <option value="main-course">Main Course</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price<span className="">*</span>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              className="mt-1 py-3 px-2 text-white block w-full border-gray-300 rounded-xl shadow-sm focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          {/* Recipe Details */}
          <div className="mb-6">
            <label
              htmlFor="recipeDetails"
              className="block text-sm font-medium text-gray-700"
            >
              Recipe Details<span className="">*</span>
            </label>
            <textarea
              id="recipeDetails"
              placeholder="Recipe Details"
              rows="4"
              name="recipeDetails"
              className="mt-1 py-3 px-3 text-white block w-full border-gray-300 rounded-xl shadow-sm focus:ring-gray-500 focus:border-gray-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-yellow-700 text-white py-2 px-4 rounded-xl hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            >
              Update Recipe Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
