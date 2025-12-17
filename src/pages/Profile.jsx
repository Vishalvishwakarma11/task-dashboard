import React, { useState } from "react";
import { HiUser, HiMail, HiPencil, HiSparkles } from "react-icons/hi";

const Profile = () => {
  const [bio, setBio] = useState("");

  return (
    <div className="max-w-5xl w-full mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-3">
          <div className="p-3 bg-slate-800 rounded-xl shadow-sm">
            <HiSparkles className="text-2xl text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 leading-tight">
              Profile
            </h1>
            <p className="text-base text-slate-600 mt-1 font-medium">
              Manage your profile information
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-800">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-700 flex items-center justify-center">
                <HiUser className="text-4xl text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-1">
                Alex Developer
              </h2>
              <p className="text-slate-300 mb-3 text-sm font-medium">
                Full Stack Developer
              </p>
              <div className="flex items-center justify-center gap-2 text-slate-300 bg-slate-800 rounded-full px-3 py-1.5 text-xs">
                <HiSparkles className="text-sm" />
                <span className="font-semibold">Premium Member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-slate-800 rounded-lg">
                      <HiUser className="text-white text-base" />
                    </div>
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Name
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-slate-900 pl-10">
                    Alex Developer
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-slate-800 rounded-lg">
                      <HiMail className="text-white text-base" />
                    </div>
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Email
                    </p>
                  </div>
                  <p className="text-base font-semibold text-slate-900 pl-10 break-all">
                    alex.dev@example.com
                  </p>
                </div>
              </div>

              {/* Bio Section */}
              <div className="pt-5 border-t border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <HiPencil className="text-white text-base" />
                  </div>
                  <label className="text-base font-semibold text-slate-900">
                    Bio
                  </label>
                </div>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:border-slate-500 transition-all bg-white hover:border-slate-400 text-sm"
                  placeholder="Write something about yourself..."
                />
                <div className="mt-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-slate-700 text-sm font-medium">
                    {bio || (
                      <span className="text-slate-400 italic">
                        No bio yet. Start writing to share your story!
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-slate-200">
                <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-3xl font-bold text-slate-900">12</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    Tasks
                  </p>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-3xl font-bold text-emerald-600">8</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    Completed
                  </p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-3xl font-bold text-amber-600">4</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    Pending
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
