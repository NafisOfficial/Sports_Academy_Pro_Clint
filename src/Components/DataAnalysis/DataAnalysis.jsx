import { motion } from 'framer-motion';

const DataAnalysis = () => {


    return (
        <div className='w-10/12 mx-auto'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-center bg-gray-300 ">
                    <div className="flex-col items-center justify-center ">
                        <div className="flex">
                            <div className="flex lg:flex-row flex-col p-4 space-x-4 space-y-4 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
                                <div className="border rounded h-40 w-[100%] md:w-72 flex items-center justify-center ml-4 lg:px-0 px-6 bg-white shadow-xl md:mt-4">
                                    <div className="flex-col space-y-2 items-center px-0 md:px-6">
                                        <div className="flex items-center justify-between space-x-6">
                                            <div className="flex items-center space-x-1 ">
                                                <div className="text-lg font-medium text-violet-500"><ion-icon name="chatbubble-ellipses-outline"></ion-icon></div>
                                                <div className="text-sm font-medium text-gray-500">Users</div>
                                            </div>
                                            <div className="text-xs bg-gray-200 px-2 py-0.5 rounded-2xl text-gray-400 font-medium">30 Days</div>
                                        </div>
                                        <div className="text-3xl font-bold ">1427</div>
                                        <div className="font-bold text-red-500 flex items-center space-x-1">
                                            <div className="text-xl"><ion-icon name="trending-down-outline"></ion-icon></div>
                                            <div className="text-sm">2.5% less</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border rounded h-40 w-[100%] md:w-72 flex items-center justify-center ml-4 lg:px-0 px-6 bg-white shadow-xl">
                                    <div className="flex-col space-y-2 items-center px-0 md:px-6">
                                        <div className="flex items-center justify-between space-x-6">
                                            <div className="flex items-center space-x-1 ">
                                                <div className="text-lg font-medium text-violet-500"><ion-icon name="briefcase-outline"></ion-icon></div>
                                                <div className="text-sm font-medium text-gray-500">Classes</div>
                                            </div>
                                            <div className="text-xs bg-gray-200 px-2 py-0.5 rounded-2xl text-gray-400 font-medium">30 Days</div>
                                        </div>
                                        <div className="text-3xl font-bold ">127</div>
                                        <div className="font-bold text-green-500 flex items-center space-x-1">
                                            <div className="text-xl"><ion-icon name="trending-up-outline"></ion-icon></div>
                                            <div className="text-sm">4.9% more</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border rounded h-40 w-[100%] md:w-72 flex items-center justify-center ml-4 lg:px-0 px-6 bg-white shadow-xl">
                                    <div className="flex-col space-y-2 items-center px-0 md:px-6">
                                        <div className="flex items-center justify-between space-x-6">
                                            <div className="flex items-center space-x-1 ">
                                                <div className="text-lg font-medium text-violet-500"><ion-icon name="document-outline"></ion-icon></div>
                                                <div className="text-sm font-medium text-gray-500">Instructors</div>
                                            </div>
                                            <div className="text-xs bg-gray-200 px-2 py-0.5 rounded-2xl text-gray-400 font-medium">30 Days</div>
                                        </div>
                                        <div className="text-3xl font-bold ">456</div>
                                        <div className="font-bold text-green-500 flex items-center space-x-1">
                                            <div className="text-xl"><ion-icon name="trending-up-outline"></ion-icon></div>
                                            <div className="text-sm">3.7% more</div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </motion.div>

            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://kit.fontawesome.com/290d4f0eb4.js" crossorigin="anonymous"></script>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        </div>
    );
};

export default DataAnalysis;