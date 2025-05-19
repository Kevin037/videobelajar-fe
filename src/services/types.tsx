export type ClassDataType = {
        completed_my_classes: number,
        total_my_classes: number,
        class_completed: string,
        photo: string,
        title: string,
        tutor_photo: string,
        tutor: string,
        tutor_position: string,
        tutor_company: string,
        total_time: number,
        total_price: number,
        progress: number
        id: number,
        status: string,
    }

export type ClassCardProps = {
    order: ClassDataType
}

export type PaymentMethod = {
  id: string;
  name: string;
  number: string;
  icon: string;
  key: string;
};

export type PaymentMethodsGroup = {
  [key: string]: PaymentMethod[];
};

export type SegmentCardProps = {
    headContent: React.ReactNode,
    middleContent: React.ReactNode,
    footContent: React.ReactNode
}

export type ClassGroup = {
  key: string;
  name: string;
};

export type ParamsType = {
  status?: string;
};

// Tipe order (sesuaikan jika kamu punya struktur lain)
export type OrderType = {
  id: number;
  // Tambahkan field lain sesuai data order
};

export type FilterProps = {
    id: number; 
    name: string
}
export type classDateItem = {
    id: number;
    name: string;
    photo: string;
    description: string;
    tutor_photo: string;
    tutor: string;
    tutor_position: string;
    tutor_company: string;
    rating_average: number;
    total_selling: number;
    new_price: number;
    type: string;
}

export interface Order {
  name: string;
  description: string;
  tutor: string;
  user_position: string;
  tutor_company: string;
  tutor_photo: string;
  rating: number;
  total_selling: number;
}

export interface User {
  name: string;
}

export type OrderItem = {
    completed_my_classes: number,
    total_my_classes: number,
    class_completed: string,
    photo: string,
    title: string,
    tutor_photo: string,
    tutor: string,
    tutor_position: string,
    tutor_company: string,
    total_time: number,
    name: string,
    price: number,
    progress: number
    id: number,
    status: string,
    no: string,
    paid_at: string,
    total_price: number
};

export interface OrderStatus {
  key: string;
  name: string;
}

export type OrderCardProps = {
    order: OrderItem
}

export type CardItemsPropVal = {
      id: number
      name: string
      photo: string
      description: string
      tutor_photo: string
      tutor: string
      tutor_position: string
      tutor_company: string
      rating_average: number
      total_selling: number
      new_price: number
      type: string
}

export type CardItemsProps = {
    data: CardItemsPropVal
}

interface TutorType {
  id: string;
  name: string;
  position: string;
  company: string;
  photo: string;
  description: string;
}

interface ModuleType {
  title: string;
  duration: number;
}

export type ClassType = {
  id: number;
  name: string;
  description?: string;
  new_price: number;
  page_title: string;
  long_description: string;
  tutors: TutorType[];
  modules: ModuleType[];
  photo: string;
  price: number;
  discount: number;
  language: string;
};

// export type PaymentMethodsGroup = {
//   [key: string]: PaymentMethod[];
// };

export type classCategoriesType = {
    id: number;
    name: string;
}

// export type HowToPay = {
//   id: string;
//   name: string;
//   number: string;
//   icon: string;
//   key: string;
// };

// export type HowToPayGroup = {
//   [key: string]: HowToPay[];
// };

export interface OrderDataType {
  id: number; 
  avatar?: string;
  user?: string;
  user_position?: string;
  user_company?: string;
  rating?: number;
  total_selling?: number;
  order_id?: number;
}

export interface Lesson {
  type: string;
}

export interface TestData {
  id: string | number;
  question?: string;
  answer?: string;
  option_1?: string;
  option_2?: string;
  option_3?: string;
  option_4?: string;
  options?:any
  user_answer?: string; 
  no: number
}

export type resultDataType = {
    submitted_at: string;
    score: number;
    total_questions: number;
    correct_answers: number;
    wrong_answers: number;
  };
export interface ContentLessonProps {
  orderData: OrderDataType;
  type: string;
  classId: number;
  testNo: number | string | null;
  test: TestData;
  tests: TestData[];
  rules: string;
  resultData: resultDataType;
  selectedLesson: Lesson;
}

export type selectedLessonTypes = {
  id: number;
  orderId: number;
  type: string;
  no: number;
  group_name: string;
  status: string;
}

export type PageLessonTypes = {
  id: number;
  orderId: number;
  type: string;
  no: number;
  group_name: string;
  status: string;
  name: string;
}

export interface LessonType {
  id: number;
  type: 'quiz' | 'video' | 'rangkuman';
  name?: string;
  group_name?: string;
  duration?: number;
  status?: string;
}

export interface Section {
  title: string;
  lessons: LessonType[];
}

export type Props = {
    title: string,
    desc?: string,
    varian?: string
    children?: React.ReactNode
}

export type OptionItem = {
  id: number;
  name: string;
};

export type FilterOption = {
  id?: string;
  name: string;
  title: React.ReactNode;
  options: OptionItem[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export type VideoLesssonProps = {
    orderData: OrderDataType,
    selectedLesson: {
        type: string
    }
}

export type TestLessonProps = {
    type: string,
    classId: string | number,
    testNo?: number | string
}

export type ModalReviewProps = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  user_rating: number;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  totalAnswer: number;
  totalQuestions: number;
  testNo: number | string;
  orderId: string | number | null;
  type: string;
  setModalOpen: any;
};

export type ProgressProps = {
  id: string;
  progress: number;
  completeModule: number;
  totalModule: number;
};

export type QuestionLessonProps = {
    orderData: OrderDataType
    type: string;
    classId: number;
    testNo: number | string;
    test: TestData;
    tests: TestData[];
}

export type TestResultProps = {
    type: string;
    classId: number | string;
    testNo: number | string;
    test: TestData;
    tests: TestData[];
    resultData: {
        submitted_at: string;
        score: number;
        total_questions: number;
        correct_answers: number;
        wrong_answers: number;
    };
}

export type SidebarMenuProps = {
    activeMenu: string
}

export type SidebarMenuItem = {
  name: string;
  url: string;
  icon: string;
  activeIcon: string;
  id: number
};

export type VideoPlayerProps = {
  videoUrl?: string;
};

export interface FacilityItem {
  key: string;
  label?: string;
  value?: string | number | null;
  img: string;
  name: string;
}

export interface ClassState {
  selectedClass: ClassType | null;
  // classLessons: any[]; // ganti dengan tipe jika tersedia
  classData: classDateItem[];
  classFacilities: FacilityItem[];
  classCategoriesData: classCategoriesType[];
  loading: boolean;
  error: string | null | boolean;
}

// GET ALL CLASSES
export interface GetClassesParams {
  category_id?: number | null;
  price?: number | null;
  duration?: number | null;
  search?: string | null;
  order_by?: string | null;

}

export interface UseClassParams {
  id?: number | null;
  limit?: number;
  category_id?: number | null;
  price?: number | null;
  duration?: number | null;
  search?: string | null;
  order_by?: string | null;
}

export interface LessonState {
  beforeLesson: PageLessonTypes | null;
  selectedLesson: selectedLessonTypes | null;
  afterLesson: PageLessonTypes | null;
  test: TestData | null;
  tests: TestData[];
  loading: boolean;
  error: string | null | boolean;
  status: boolean;
  submitStatus: boolean;
  answerStatus: boolean;
  resultData: resultDataType | null;
}

export type AnswerDataType = {
  id: number,
  answer: string
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export type useClassType = {
  classData: classDateItem[];
  selectedClass: ClassType | null;
  limitedClass: classDateItem[];
  loading: boolean;
  classFacilities: Facility[];
  classCategoriesData: classCategoriesType[];
}

export interface UseLessonResult {
  id?: number | string | null;
  orderId?: number | null;
  type?: string | null;
  no?: string | number | null;
  selectedLesson: selectedLessonTypes | null;
  beforeLesson: PageLessonTypes | null;
  afterLesson: PageLessonTypes | null;
  test: TestData | null;
  tests: TestData[];
  status: boolean;
  submitStatus: boolean;
  answerStatus: boolean;
  resultData: resultDataType | null;
  loading: boolean;
  error: string | boolean | null;
  completeModule: (id: number | string) => void;
  submitTest: (orderLessonId: number | string) => void;
  updateAnswer: (AnswerData: AnswerDataType) => void;
}

export type useOrderType = {
  currentOrder: Order | null;
  loading: boolean;
  error: string | boolean | null;
  createOrder: (userData: OrderData) => void;
  orderData: Order[];
  updateOrder: (orderData: any) => void;
  status: boolean | null;
  orderLessons: Section[];
  createReview: (reviewData: ReviewData) => void;
  paidOrder: (id: any) => void;
  myClassData: ClassDataType[];
}

export type ChangePaymentType = {
  order_id: string | number;
  payment_method: string;
}

export type ReviewDataType = {
  order_id: number;
  rating: number;
  description: string;
};

export type UserData = {
  name: string;
  email: string | null;
  password: string | null;
  no_hp: string;
  photo?: string | null;
}

export interface UserState {
  currentUser: User | null | boolean;
  loading: boolean;
  error: string | boolean | null;
  status: boolean | null | any;
}

export type ItemSpesificationProps = {
  isDetail?: boolean;
  data: {
      name?: string;
      description?: string;
      page_title?: string;
      photo?: string;
      new_price: number;
      price: number;
      discount: number;
      language?: string;
    // [key: string]: any;
  };
  id?: string | number;
  facilities: Facility[]
}

export type Facility = {
  key: string;
  name: string;
  value: string;
  img: string;
};