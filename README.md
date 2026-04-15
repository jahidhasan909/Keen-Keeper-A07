Project Name: Keen Keeper
                                                                                      
Short Description: Keen Keeper একটি কনট্যাক্ট ম্যানেজমেন্ট অ্যাপ, যেখানে ইউজাররা বন্ধু বা পরিচিত মানুষের কনট্যাক্ট ডিটেইলস সংরক্ষণ করতে পারে এবং টেক্সট, কল ও ভিডিও যোগাযোগের তারিখসহ হিস্ট্রি ট্র্যাক করতে পারে। এছাড়াও একটি স্ট্যাটস/ফ্লোচার্ট সেকশন রয়েছে যেখানে বিভিন্ন ধরনের যোগাযোগের সংখ্যা দেখা যায় 
                                                                                       

Technologies:
*React.js
*React Router DOM
*Tailwind CSS
*Daisyui
*Recharts
*React toastify  
                                                                                      

 3 key features : 
 1. Contact Details & Interaction System:                                     

হোম পেজে কনট্যাক্টগুলো কার্ড আকারে দেখানো হয়।
কোনো কার্ডে ক্লিক করলে ডিটেইলস পেজে নিয়ে যায়।
ডিটেইলস পেজে থাকে:              

* Call Button
* Text Button
* Video Button                 

যেকোনো বাটনে ক্লিক করলে toast notification দেখায় এবং সেই interaction টাইমলাইনে যোগ হয় React Context API ব্যবহার করে।                                  

2.Timeline Management System:
টাইমলাইন পেজে সব interaction history (call, text, video) দেখা যায়।
ফিচারগুলো:                            

* Search by name
* Sort by Call
* Sort by Text
* Sort by Video                        

সব sorting ও filtering logic centralized ভাবে context state দিয়ে manage করা হয়েছে।        

3. Analytics / Flowchart Dashboard:                        

স্ট্যাটস পেজে পুরো অ্যাপের activity visualization করা হয়।
এখানে দেখা যায়:                    

* Total Calls count
* Total Text count
* Total Video count                

সব ডাটা flowchart  আকারে দেখানো হয়, যাতে user সহজে বুঝতে পারে তাদের communication activity।                                                                                     
