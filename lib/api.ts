import axios from "axios";

export async function loadData(slug: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_WP_DOMAIN}pages?slug=${slug}&_fields=acf&acf_format=standard`
    );
    return response.data;
  } catch (error) {
    console.log(error, "error fetching data");
    throw error;
  }
}


export async function loadPosts(category: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_WP_DOMAIN}posts?category=${category}&acf_format=standard`
    );
    return response.data;
  } catch (error) {
    console.log(error, "error fetching data");
    throw error;
  }
}


export async function loadPost(postId: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_WP_DOMAIN}posts/${postId}?acf_format=standard`
    );
    return response.data;
  } catch (error) {
    console.log(error, "error fetching data");
    throw error;
  }
}
