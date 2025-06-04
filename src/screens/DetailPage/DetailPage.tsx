import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import { Button } from "../../components/ui/button";

interface Plant {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  reviewDistribution: { [key: number]: number };
  latestReview: {
    author: string;
    date: string;
    rating: number;
    comment: string;
    likes: number;
    dislikes: number;
  };
}

const plants: { [key: string]: Plant } = {
  "fiddle-leaf-fig": {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    image: "/depth-5--frame-0.png",
    description: "The Fiddle Leaf Fig is a popular houseplant known for its large, violin-shaped leaves. It thrives in bright, indirect light and requires moderate watering.",
    rating: 4.5,
    reviews: 120,
    reviewDistribution: {
      5: 40,
      4: 30,
      3: 15,
      2: 10,
      1: 5
    },
    latestReview: {
      author: "Sophia Carter",
      date: "1 month ago",
      rating: 5,
      comment: "Absolutely love my Fiddle Leaf Fig! It arrived in perfect condition and has quickly become the centerpiece of my living room. Highly recommend!",
      likes: 15,
      dislikes: 2
    }
  },
  "monstera-deliciosa": {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    image: "/depth-5--frame-0-1.png",
    description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its distinctive split leaves. It's a tropical plant that adds a dramatic touch to any space.",
    rating: 4.7,
    reviews: 95,
    reviewDistribution: {
      5: 45,
      4: 35,
      3: 10,
      2: 7,
      1: 3
    },
    latestReview: {
      author: "James Wilson",
      date: "2 weeks ago",
      rating: 5,
      comment: "Beautiful plant! Growing well and the leaves are stunning. Very happy with my purchase.",
      likes: 12,
      dislikes: 1
    }
  },
  "snake-plant": {
    id: "snake-plant",
    name: "Monstera Deliciosa",
    image: "/depth-5--frame-0-2.png",
    description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its distinctive split leaves. It's a tropical plant that adds a dramatic touch to any space.",
    rating: 4.7,
    reviews: 95,
    reviewDistribution: {
      5: 45,
      4: 35,
      3: 10,
      2: 7,
      1: 3
    },
    latestReview: {
      author: "James Wilson",
      date: "2 weeks ago",
      rating: 5,
      comment: "Beautiful plant! Growing well and the leaves are stunning. Very happy with my purchase.",
      likes: 12,
      dislikes: 1
    }
  },
  "zz-plant": {
    id: "zzplant",
    name: "Zamioculcas",
    image: "/depth-5--frame-0-3.png",
    description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its distinctive split leaves. It's a tropical plant that adds a dramatic touch to any space.",
    rating: 4.7,
    reviews: 95,
    reviewDistribution: {
      5: 45,
      4: 35,
      3: 10,
      2: 7,
      1: 3
    },
    latestReview: {
      author: "James Wilson",
      date: "2 weeks ago",
      rating: 5,
      comment: "Beautiful plant! Growing well and the leaves are stunning. Very happy with my purchase.",
      likes: 12,
      dislikes: 1
    }
  },
  "peace-lily": {
    id: "peace-lily",
    name: "Monstera Deliciosa",
    image: "/depth-5--frame-0-4.png",
    description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its distinctive split leaves. It's a tropical plant that adds a dramatic touch to any space.",
    rating: 4.7,
    reviews: 95,
    reviewDistribution: {
      5: 45,
      4: 35,
      3: 10,
      2: 7,
      1: 3
    },
    latestReview: {
      author: "James Wilson",
      date: "2 weeks ago",
      rating: 5,
      comment: "Beautiful plant! Growing well and the leaves are stunning. Very happy with my purchase.",
      likes: 12,
      dislikes: 1
    }
  },
  "calathea": {
    id: "calathea",
    name: "Monstera Deliciosa",
    image: "/depth-5--frame-0-5.png",
    description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its distinctive split leaves. It's a tropical plant that adds a dramatic touch to any space.",
    rating: 4.7,
    reviews: 95,
    reviewDistribution: {
      5: 45,
      4: 35,
      3: 10,
      2: 7,
      1: 3
    },
    latestReview: {
      author: "James Wilson",
      date: "2 weeks ago",
      rating: 5,
      comment: "Beautiful plant! Growing well and the leaves are stunning. Very happy with my purchase.",
      likes: 12,
      dislikes: 1
    }
  },
  "pothos": {
    id: "pothos",
    name: "pothos",
    image: "..//depth-5--frame-0-6.png",
    description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its distinctive split leaves. It's a tropical plant that adds a dramatic touch to any space.",
    rating: 4.7,
    reviews: 95,
    reviewDistribution: {
      5: 45,
      4: 35,
      3: 10,
      2: 7,
      1: 3
    },
    latestReview: {
      author: "James Wilson",
      date: "2 weeks ago",
      rating: 5,
      comment: "Beautiful plant! Growing well and the leaves are stunning. Very happy with my purchase.",
      likes: 12,
      dislikes: 1
    }
  },
  "spider-plant": {
    id: "spider-plant",
    name: "Monstera Deliciosa",
    image: "..//depth-5--frame-0-7.png",
    description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its distinctive split leaves. It's a tropical plant that adds a dramatic touch to any space.",
    rating: 4.7,
    reviews: 95,
    reviewDistribution: {
      5: 45,
      4: 35,
      3: 10,
      2: 7,
      1: 3
    },
    latestReview: {
      author: "James Wilson",
      date: "2 weeks ago",
      rating: 5,
      comment: "Beautiful plant! Growing well and the leaves are stunning. Very happy with my purchase.",
      likes: 12,
      dislikes: 1
    }
  }
};

export const DetailPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const plant = plants[id || ""];

  if (!plant) {
    return <div>Plant not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center justify-between p-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Share2 className="h-6 w-6" />
        </button>
      </header>

      <div className="flex-1 overflow-auto">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-96 object-cover"
        />

        <div className="p-4 space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">About</h1>
            <p className="text-gray-700">{plant.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="flex items-center gap-4 mb-6">
              <div>
                <div className="text-4xl font-bold">{plant.rating}</div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < Math.floor(plant.rating)
                          ? "text-green-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-500">{plant.reviews} reviews</div>
              </div>

              <div className="flex-1">
                {Object.entries(plant.reviewDistribution)
                  .reverse()
                  .map(([rating, percentage]) => (
                    <div key={rating} className="flex items-center gap-2">
                      <span className="w-3">{rating}</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded">
                        <div
                          className="h-full bg-green-500 rounded"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="w-8 text-sm text-gray-500">{percentage}%</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <div className="font-medium">{plant.latestReview.author}</div>
                  <div className="text-sm text-gray-500">{plant.latestReview.date}</div>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < plant.latestReview.rating ? "text-green-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">{plant.latestReview.comment}</p>
              <div className="flex gap-4">
                <button className="flex items-center gap-1 text-gray-500">
                  <span>👍</span>
                  <span>{plant.latestReview.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-500">
                  <span>👎</span>
                  <span>{plant.latestReview.dislikes}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Button
          className="w-full bg-[#639154] hover:bg-[#4a7340] text-white font-medium py-6"
          onClick={() => navigate("/cart")}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};