import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
// These 2 dependecies will allow us to set path
import path from "path";
import { fileURLToPath } from "url";

// CONFIGURATIONS
