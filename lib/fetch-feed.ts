import prismadb from "./prismadb";

export const getFeed = async (): Promise<any> => {
  try {
    const posts = await prismadb.post.findMany({
      take: 50, // Fetch 50 posts
      orderBy: {
        createdAt: "desc", // Sort by createdAt in descending order
      },
    });

    // Return the count of fetched posts
    return posts;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getComment = async (): Promise<any> => {
  try {
    const postsWithComments = await prismadb.post.findMany({
      include: {
        comments: true,
      },
      orderBy: {
        createdAt: "desc", // Sort by createdAt in descending order
      },
    });
    return postsWithComments;
  } catch (e) {
    console.error("Error fetching posts:", e);
  }
};

export const getFilter = async (nameFilter:any): Promise<any> => {
  try {
    const response = await prismadb.post.findMany({
      where: {
        OR: [
          { name: { contains: nameFilter } },
          { comments: { some: { name: { contains: nameFilter } } } },
        ],
      },
    });
    return response
  } catch (e) {
    console.log(e);
  }
};
