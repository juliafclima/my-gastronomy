import express from "express";
import passport from "passport";
import localStrategy from "passport-local";
import crypto from "crypto";
import { Mongo } from "../database/mongo.js";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

// AUTENTICAÇÃO E REGISTRAÇÃO
const collectionName = 'users';

