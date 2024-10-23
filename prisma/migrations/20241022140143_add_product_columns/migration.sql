/*
  Warnings:

  - A unique constraint covering the columns `[sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brand" TEXT,
ADD COLUMN     "category" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "dimensions" TEXT,
ADD COLUMN     "discount_price" DOUBLE PRECISION,
ADD COLUMN     "image_url" TEXT,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "sku" TEXT NOT NULL DEFAULT 'SKU000',
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active',
ADD COLUMN     "stock_quantity" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN      "updated_at" TIMESTAMP(3) NOT NULL DEFAULT now(),
ADD COLUMN     "weight" DOUBLE PRECISION;

-- CreateIndex
-- CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
