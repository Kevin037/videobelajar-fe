import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassById, getClassCategories, getClasses } from '../services/api/classSlice';
import { RootState } from '@/services/store';
import { classCategoriesType, classDateItem, ClassType } from '@/services/types';

const useClass = ({id=null,limit=0,category_id = null, price = null, duration = null, search = null, order_by = null}): {
  classData: classDateItem[];
  selectedClass: ClassType | null;
  limitedClass: classDateItem[];
  loading: boolean;
  error: any;
  classLessons: any;
  classFacilities: any;
  classCategoriesData: classCategoriesType[];
} => {
  const dispatch = useDispatch();
  const {classData, selectedClass, classLessons, classFacilities, classCategoriesData} = useSelector((state: RootState) => state.class);
  const limitedClass = classData.slice(0,limit);
  const loading = useSelector(state => state.class.loading);
  const error = useSelector(state => state.class.error);

  useEffect(() => {
    dispatch(getClasses({category_id, price, duration, search, order_by}));
    dispatch(getClassCategories());
    if (id) {
      dispatch(fetchClassById(id)); 
    }
  }, [dispatch, category_id, price, duration, search, order_by,id]);

  return { classData, loading, error, selectedClass, limitedClass, classLessons, classFacilities, classCategoriesData};
};

export default useClass;
