-- CreateTable
CREATE TABLE "Vessel" (
    "id" TEXT NOT NULL,
    "mmsi" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "lat" INTEGER NOT NULL,
    "long" INTEGER NOT NULL,

    CONSTRAINT "Vessel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vessel_mmsi_key" ON "Vessel"("mmsi");
