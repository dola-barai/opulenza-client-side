import Swal from "sweetalert2";
import HeaderForRoute from "../shared/HeaderForRoute";
import { refresh } from "aos";
import Footer from "../Home/Footer";

const AddMenuItems = () => {

    const handleAddMenu = (event) => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const menu = form.menu.value;
        const category = form.category.value;
        const price = form.price.value;
        const item = form.item.value;
        const recipe = form.recipe.value;

        const addMenu = {
            photoURL: image,
            menu: menu,
            category: category,
            recipe: recipe,
            item: item,
            price: price

        }
        console.log(addMenu);

        fetch('https://restaurant-server-chi.vercel.app/menu', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addMenu)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Add a Menu successfully',
                        'success'
                    )
                }
                refresh()
            })
    }
    return (
        <div >
            <HeaderForRoute></HeaderForRoute>
            <div className="pb-5 bg-hero bg-cover bg-right pt-32 text-white" >
                <div>
                    <h2 className='h2 capitalize text-white text-center'>
                        Add a Menu
                    </h2>
                </div>
                <form onSubmit={handleAddMenu}>
                    <div className="card w-full max-w-sm shadow-2xl my-10 bg-black bg-opacity-25 mx-auto">
                        <div className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-primary text-white">Menu</span>
                                </label>
                                <input type="text" name="menu" placeholder="Indian/North Indian/South Indian/Italian" className="input h-[40px] bg-opacity-10" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-primary text-white">Image URL</span>
                                </label>
                                <input type="text" name="image" placeholder="Image URL" className="input h-[40px] bg-opacity-10" required />
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-primary text-white">Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="Category" className="input h-[40px] bg-opacity-10" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-primary text-white">Item</span>
                                    </label>
                                    <input type="text" name="item" placeholder="Item" className="input h-[40px] bg-opacity-10" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-primary text-white">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Price" className="input h-[40px] bg-opacity-10" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-primary text-white">Recipes</span>
                                </label>
                                <input type="text" name="recipe" placeholder="Recipes" className="input h-[40px] bg-opacity-10" required />
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-black font-primary text-white h-[40px]">Add Menu</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddMenuItems;