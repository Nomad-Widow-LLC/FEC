import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Promise from 'bluebird';



export default function getAverageStars(id) {
  Promise.all(getStars(id))
}