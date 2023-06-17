import { Review } from "@prisma/client"

export const calculateReviewRatingsAverage = (reviews: Review[]) => {
  return reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length || 0;
}