// hooks/useUser.js
import { useDispatch, useSelector } from 'react-redux';
import { createOrderThunk, createReviewThunk, getMyClasses, getOrderById, getOrders, paidOrderThunk, updateOrderThunk } from '../services/api/orderSlice';
import { useEffect } from 'react';
import { ParamsType, Section } from '@/services/types';

const useOrder = (id: number | null | undefined = null,params: ParamsType|null=null, testId = null, classes = false): {
  currentOrder: any;
  loading: boolean;
  error: any;
  createOrder: any;
  orderData: any;
  updateOrder: any;
  status: any;
  orderLessons: Section[];
  createReview: any;
  paidOrder: any;
  myClassData: any;
} => {
  const dispatch = useDispatch();
  const { orderData, currentOrder, loading, error, status, orderLessons, myClassData } = useSelector(state => state.order);

  const createOrder = (userData) => {
    dispatch(createOrderThunk(userData));
  };

  const createReview = (reviewData) => {
    dispatch(createReviewThunk(reviewData));
  };

  const updateOrder = (orderData) => {
    dispatch(updateOrderThunk(orderData));
  };

  const paidOrder = (id) => {
    dispatch(paidOrderThunk(id));
  };

    useEffect(() => {
      // if (order_id || user_id) {
        dispatch(getOrders(params)); 
      // }
      if (classes) {
        dispatch(getMyClasses(params));
      }
      if (id) {
        dispatch(getOrderById(id));
      }
    }, [dispatch,params]);

  return { currentOrder, loading, error, createOrder, orderData, updateOrder, status, orderLessons, createReview, paidOrder, myClassData };
};

export default useOrder;
