"use client";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import firebase from "firebase/app";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
const Todos = () => {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [search, setSearch] = useState({});
  const [todo, setTodo] = useState([]);
  const [toggleUpdate, setToggleUpdate] = useState(false);

  //   const handleShow = (data) => {setShow(true);
  //      setUpdateData(data.name,data.desc)

  // }
  // const handleClose = () =>{
  //     // setShow(false)
  //     // console.log({rname:updateData,name:name,desc:desc})

  // //    dispatch(updateTodo({rname:updateData,name:name,desc:desc}))
  //   };

  const HandleClick = async () => {
    let doc;

    doc = await addDoc(collection(db, "todos"), {
      name: name,
      desc: desc,
    });

    setName("");
    setDesc("");
  };
  useEffect(() => {
    const getTodos = async () => {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const data = [];
      querySnapshot.forEach((docc) => {
       
        const result = docc.data();
        data.push({ id: docc.id, ...result });
       
      });
      setTodo(data);
    };
    getTodos();
  }, [todo]);

  // delete doc
  const DeleteTodo = async (e) => {
    //   alert(e)
    try {
      const data = await deleteDoc(doc(db, "todos", e));
      alert("deleted");
    } catch (error) {
      console.log(error);
    }
  };
  const SearchTodo = (e) => {
    setSearch(todo.find((data) => data.name == e));
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col max-w-[400px] shadow-lg p-4">
        <label htmlFor="">name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" border border-blue-300 rounded-md block px-10 py-2"
          placeholder="Enter the name"
        />
        <label htmlFor="">desciption:</label>
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="  border border-blue-300 rounded-md shadow-md block px-10 py-2"
          placeholder="Enter Description"
          name=""
          id=""
          cols="25"
          rows="1"
        ></textarea>
        <button
          onClick={HandleClick}
          className="bg-blue-500  mt-2 cursor-pointer text-white rounded-md px-4 py-2"
        >
          AddTodu
        </button>
      </div>
      <label htmlFor="">Search:</label>
      <input
        type="text"
        onChange={(e) => SearchTodo(e.target.value)}
        className=" border border-blue-300  rounded-md block px-20 py-2"
        placeholder="Enter the Name to Search"
      />
      {search?.name && (
        <div className="bg-gray-200 p-4 rounded-lg">
          <p>name:{search.name}</p>
          <p>desc: {search.desc}</p>
        </div>
      )}
      {todo?.map((data) => (
        <div key={data.id} className="m-4 bg-gray-100   p-10 rounded-md">
          <p className="">name: {data.name}</p>
          <p className="">desc: {data.desc}</p>
          <button
            onClick={() => DeleteTodo(data.id)}
            className=" bg-blue-500 cursor-pointer rounded-lg m-6 px-4 py-2 text-white"
          >
            deleteTodo
          </button>
          <button
            onClick={() => handleShow(data)}
            className=" bg-blue-500 cursor-pointer mt-6 rounded-lg px-4 py-2 text-white"
          >
            updateButton
          </button>

          
                                                                                          
        </div>
      ))}
    </div>
  );
};

export default Todos;
