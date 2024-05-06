import { supabase } from "@/shared/supabase";

// 방명록 가져오기
export const fetchCommentData = async () => {
  const commentsQuery = await supabase
    .from("comments")
    .select("*")
    .order("id", { ascending: false });

  const { data: commentsData, error } = commentsQuery;
  return { data: commentsData, error };
};

// 방명록 등록
export const addComment = async (nickname: string, content: string) => {
  await supabase
    .from("comments")
    .insert({ nickname: nickname, content: content })
    .select();
};
